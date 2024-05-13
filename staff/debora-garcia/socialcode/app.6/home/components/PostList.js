class PostList extends Component {
    constructor() {
        super("section")

        this.load()
        //ejecutamos el metodo creado que cargara todo de nuevo
    }


    // eliina los hijos si los hay, obtiene todos los posts
    //añade el nuevo post creado
    load() {
        this.removeAll()

        const posts = logic.getPosts()

        posts.forEach(post => {
            const newPost = new Post(post)

            //cuando se elimina el post, refrescar la pagina
            newPost.onPostDeleted(() => this.load())

            this.add(newPost)
        })
    }
}
// eliina los hijos si los hay, obtiene todos los posts
// se obtienen los posts de nuevo
// para cada post se crea un nuevo componente post
// a este post se le agrega un comportamiento de que mediante un evento click se tiene que refrescar la vista
// se vuelve a añadir el post