export default function (context){
        context.store.dispatch('initAuth', context.req)
        console.log('[Middleware] Check Auth')
}