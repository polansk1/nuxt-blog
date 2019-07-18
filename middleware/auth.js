export default function (context) {
    if (!context.store.getters.isAuthenticated){
        console.log('[Middleware] Auth')
        context.redirect('/admin/auth')
    }
}