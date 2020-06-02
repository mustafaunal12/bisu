let database = {};

const isMatchingObject = function (obj, query) {
	for (const key in query) {
		const element = query[key];
		if (obj[key] != element) {
			return undefined;
		}
	}
	return true;
};

const find = (schema, query) => {
	const fetchedData = schema.reduce((pre, cur) => {
		if (isMatchingObject(cur, query)) {
			pre.push(cur);
		}
		return pre;
	}, []);

	if (fetchedData.length === 0) {
		return [];
	}
	return fetchedData;
};

const fetch = (schema) => async (query = {}) => {
	let data = database[schema];
	if (!data) {
		return undefined;
	}

	return find(data, query.where);
};

const findOne = (schema) => async (query = {}) => {
	if (!query.where) {
		return undefined;
	}

	return await find(database[schema], query.where);
};

const remove = schema => async query => {
	let data = database[schema];

	if (!query.where) {
		return undefined;
	}

	if (!data) {
		return false;
	}

	const initialLength = data.length;
	data = data.map(d => {
		let allPropMatch = true;
		for (const key in query) {
			const element = query[key];
			if (d[key] != element) {
				allPropMatch = false;
			}
		}
		if (!allPropMatch) {
			return d;
		}
	});

	database[schema] = data.filter(t => t !== undefined);

	return database[schema].length < initialLength;
};

const save = (schema) => async entity => {
	if (!database[schema]) {
		database[schema] = [];
	}

	const data = database[schema];
	if (!entity) {
		return;
	}

	data.push(entity);
	return entity;
};

const sequelizeMock = {
	authenticate: () => true,
	define: (schema) => {
		if (!database[schema]) {
			database[schema] = [];
		}

		return {
			findAll: async (condition) => await fetch(schema)(condition),
			update: async (model) => await save(schema)(model),
			create: async (model) => await save(schema)(model),
			findOne: async (query) => await findOne(schema)(query),
			remove: async (query) => await remove(schema)(query)
		};
	},

};

module.exports = {
	sequelizeMock
};