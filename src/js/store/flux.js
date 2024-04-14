const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			favorites:[],
			users:[],
			planets:[],
			vehicles:[],
		},
		actions: {
			addFavorites: (newFavorite) => {
				setStore({ favorites: [...getStore().favorites,newFavorite]})
			},
			//25.3 41.11 , 44.44
			removeFavorites: (item, array) => {
				setStore({ favorites: array.filter((element) => element != item) })
			},
			getUsers: async () => {
				const response = await fetch(`https://swapi.dev/api/people`)
				if (!response.ok) {
					console.log("Error en el fetch", response.status, response.statusText)
					return response.status
				  }
				  const data = await response.json()
				  setStore({ users: data.results })
			},
			getPlanets: async () => {
				const response = await fetch(`https://swapi.dev/api/planets`)
				if (!response.ok) {
					console.log("Error en el fetch", response.status, response.statusText)
					return response.status
				  }
				  const data = await response.json()
				  setStore({ planets: data.results })
			},
			getVehicles: async () => {
				const response = await fetch(`https://swapi.dev/api/vehicles`)
				if (!response.ok) {
					console.log("Error en el fetch", response.status, response.statusText)
					return response.status
				  }
				  const data = await response.json()
				  setStore({ vehicles: data.results })
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
