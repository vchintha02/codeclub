export default {
	fetch(request) {
		if(request.method=='POST'){
			return new Response('Only GET requests are allowed!!!');
			}
		else{
			return new Response('GET is accepted');
			}

//		return new Response('Hello worker!', {
//			headers: {
//				'content-type': 'text/plain',
//			},
//		});
	},
};
