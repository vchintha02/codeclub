export default {
        fetch(request) {
                if(request.method=='POST'){
                        return new Response('Only GET requests are allowed!!!', {
                                headers:{
                                        'content-type': 'application/json',
                                },
                        });
                }
                else{
                        return new Response('GET is accepted', {
                                headers:{
                                        'content-type': 'application/json',
                                },
                        });
                }

//              return new Response('Hello worker!', {
//                      headers: {
//                              'content-type': 'text/plain',
//                      },
//              });
        },
};
