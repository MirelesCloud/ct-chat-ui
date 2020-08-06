import { Server, Model } from 'miragejs'

export function makeServer({ environment = "development" } = {}) {

let server = new Server({
  environment,

    models: {
      user: Model,
    },

  seeds(server) {
  server.create("user", { 
    name: "Charlie Brown",
    email: "charliebrown@peanuts.com",
    phone: "(432) 111-4444",
    avatar: "./assets/charlie-brown.jpg"
  })
  server.create("user", { 
    name: "Snoopy",
    email: "snoopy@peanuts.com",
    phone: "(555) 243-3323"
   })
  server.create("user", {
    name: "Peppermint Patty",
    email: "patty@peanuts.com",
    phone: "(555) 242-4344"
  })
  server.create("user", {
    name: "Lucy van Pelt",
    email: "lucy@peanuts.com",
    phone: "(555) 333-4444"
  })
  server.create("user", {
    name: "Linus van Pelt",
    email: "linus@peanuts.com",
    phone: "(555) 666-2344"
  })
  server.create("user", {
    name: "Sally Brown",
    email: "sally@peanuts.com",
    phone: "(555) 112-8955"
  })
  server.create("user", {
    name: "Woodstock",
    email: "woodstock@peanuts.com",
    phone: "(555) 777-9185"
  })
  },

  routes() {

    this.namespace = "api"

    this.get("/users", schema => {
      return schema.users.all()
    })
    
  },
  })

  return server
}


