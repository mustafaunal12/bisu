# bisu

Proje 'Onion Architecture' mimarisine uygun geliştirilmiştir. Merkezinde domain ve service'lerin bulunduğu 'Core' yapısının etrafında Data, Api ve UI katmanlarını barındıran Infrastructure bulunmaktadır. Böylelikle proje genelinde ortak kullanılan doman ve service'ler tekilleştirilmiş, database bağımsız bir mimari oluşturulmuştur.

[the-onion-architecture-part-1](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-1/)

[the-onion-architecture-part-2](https://jeffreypalermo.com/2008/07/the-onion-architecture-part-2/)

Log'lar için elasticsearch ve kibana arayüzü kullanılmıştır. 

## docker

Proje 5 farklı container olacak şekilde dockerize edilmiş olup, local environmenttan bağımsız çalıştırılabilmektedir. Projenin çalıştırılacağı makinede docker kurulu olmalıdır.  
MySql container'ı ayağa kalkarken /.docker/database altındaki scriptleri çalıştırıp, şema ve örnek dataları oluşturur.  
Kibana container'ı ile proje logları görüntülenebilir.  

```
api => http://localhost:8081/
ui => http://localhost:8080/
mysql => http://localhost:3306/
elasticsearch => http://localhost:9200/
kibana => http://localhost:5601/
```

[https://docs.docker.com/docker-for-mac/install](https://docs.docker.com/docker-for-mac/install/)  


## run

```bash
npm start 
```

İlk defa çalıştırıldığında makinenin performansına ve internet bağlantısına bağlı olarak docker image'larının yüklenmesi ve kurulması zaman alabilir. Daha sonraki çalıştırmalarda local'den kullanılacağından daha hızlı olacaktır.   

## build

```bash
npm run build 
```

Proje genelinde ihtiyaç duyulan tüm npm paketlerini yükler. test ve coverage scriptlerinin çalışabilmesi için öncesinde bu komutun çalıştırılması gerekir. 

## test 

```bash
npm test 
```

Test sonuçlarını terminal ekranında gösterir.  

```bash
npm run coverage
```

Test coverage sonuçlarını terminal ekranında gösterir.   

