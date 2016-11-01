function makeRequest(url) {
                var promise = new Promise( httpPromise );
                
                function httpPromise(resolve, reject) {
                    var httpRequest = new XMLHttpRequest();
                     if ( !httpRequest ) {
                       reject('Giving up :( Cannot create an XMLHTTP instance');
                     }
                     httpRequest.open('GET', url);
                     httpRequest.send();
                     
                     httpRequest.addEventListener('load', httpResolve.bind(httpRequest));
                     httpRequest.addEventListener('error', httpReject.bind(httpRequest));
                     
                     function httpResolve() {                        
                        if ( this.status >= 200 && this.status < 300 ) {
                            resolve(JSON.parse(this.response));
                        } else {
                            reject(this.statusText);
                        }                          
                     }
                     
                     function httpReject() {
                         reject(this.statusText);
                     }
                }
                
                // Return the promise
                return promise;
            }

 var callback = {
              success: function(data) {
                console.log(data.title);
                displayTitles('article', data);
              },
              error: function(data) {
                console.log(2, 'error', data);
              }
            };
function displayTitles(selector, list)
{
    var dom = document.querySelector(selector);
    list.forEach(function(value) {
                    console.log(value);
                    var li = document.createElement("li");    
                    li.textContent = "Title: " + value.title;
                    li.setAttribute('class', 'link');
                    dom.appendChild(li);
                });
}
            makeRequest('http://localhost:3000/todo').then(callback.success, callback.error);