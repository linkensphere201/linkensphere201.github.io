function GetRandomWall(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "47.99.216.43:18080/bannerback", true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function(){
        var XMLHttpReq = xhr;
        if (XMLHttpReq.readyState == 4) {
            if (XMLHttpReq.status == 200) {                
                var data = XMLHttpReq.responseText;
                console.log(data);
                document.getElementById('bannerback').style.backgroundImage = "url("+ data +")";
            }
        }
    };
    xhr.send();
}
function onLoad() {
  console.log('loaded!');
  // GetRandomWall()
}
