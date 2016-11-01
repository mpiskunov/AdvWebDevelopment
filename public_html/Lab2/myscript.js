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
                console.log(data.users);
                displayUsers('ul.users', data.users);
              },
              error: function(data) {
                console.log(2, 'error', data);
              }
            };

function displayUsers(selector, list)
{
    var dom = document.querySelector(selector);
    list.forEach(function(value) {
                    console.log(value);
                    /* you can use the creaeElement tag to create any HTML element you want */
                    var li = document.createElement("li");            
                    li.textContent = value.name.first + " " + value.name.last ;
                    /* you can set any attribute using the function below for any Created element */
                    li.setAttribute('class', 'link');
                    var filePath = '../Lab2/data/' + value._id + '.json';
                    /*you can even attach events to the element */
                    li.addEventListener('click', onUserClick.bind(null, filePath));
                    dom.appendChild(li);
                });
}

var callbackUser = {
              success: function(data) {
                console.log(data);
                displayUserContent('article', data);
              },
              error: function(data) {
                console.log(2, 'error', data);
              }
            };

function onUserClick(filePath)
            {
                makeRequest(filePath).then(callbackUser.success, callbackUser.error);
            }
            
function displayUserContent(selector, data)
{
    var dom = document.querySelector(selector); //article
    var figure = document.querySelector('figure'); //pic 
    
    while (figure.firstChild) {figure.removeChild(figure.firstChild);} //when link is clicked, remove old
    while (dom.firstChild) {dom.removeChild(dom.firstChild);}
                
    if (data.isActive)
    {
        dom.setAttribute('class', 'active')
    }
    else
    {
        dom.setAttribute('class', 'inactive')
    }
    var img = document.createElement("img");
    var ptag = document.createElement('p');
    img.setAttribute('src', '../Lab2/img/' + data.picture);
    figure.appendChild(img);
    
    
    dom.appendChild( createParagraphElement('Name: ', data.name.first + " " + data.name.last) );
    dom.appendChild( createParagraphElement('Company: ', data.company) );
    dom.appendChild( createParagraphElement('Email: ', data.email) );
    dom.appendChild( createParagraphElement('Phone: ', data.phone) );
    dom.appendChild( createParagraphElement('Address: ', data.address) );
    dom.appendChild( createParagraphElement('Registered: ', data.registered) );
    dom.appendChild( createParagraphElement('Age: ', data.age) );
    dom.appendChild( createParagraphElement('Eye Color: ', data.eyeColor) );
    dom.appendChild( createParagraphElement('Greeting: ', data.greeting) );
    dom.appendChild( createParagraphElement('Favorite Fruit: ', data.favoriteFruit) );
    dom.appendChild( createParagraphElement('Balance: ', data.balance) );
    dom.appendChild( createParagraphElement('About: ', data.about) );
                

}

 function createParagraphElement(label, text) {
                var pTag = document.createElement('p'),
                    strongTag = document.createElement('strong'),
                    strongText = document.createTextNode(label),
                    pText = document.createTextNode(text);
          
                    strongTag.appendChild(strongText);
                    pTag.appendChild(strongTag);  
                    pTag.appendChild(pText);  
                    return pTag;
            }

            makeRequest('../Lab2/data/users.json').then(callback.success, callback.error);