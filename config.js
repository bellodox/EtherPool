module.exports = {

	//This is where you setup geth rpc to listen on
	ethServer : {
		host: 'pool-ethminers-net.herokuapp.com',
		path: '/',
		//since we are listening on a custom port, we need to specify it by hand
		port: '8545',
		//This is what changes the request to a POST request
		method: 'POST'
	},

	redisPassword : "409sN6ll7Lvncik5",

	//Your pool coinbase address here
	poolAddress : "0xd1e56c2e765180aa0371928fd4d1e41fbcda34d4"
};
