# Github-Profile-Search
Just searches github for users using the git api.

This approach with the async pipe requires a lot of observable setup in the service.  This could be mitigated in several ways, but I believe that this approach represents the most simple code in the template and component, with the complexity in the service.

Other options would be:

1. A single subscription in the component that then split the resulting object into several observable data points.  This would complicate the component instead of the service.  Since a service might be reused, this is probably not the right way to go.
1. Simply return the http.get and let the component manage the subscription. Since we're returning multiple bits of data, it still makes the binding and error handling complicated on the client side.
1. NgRx - which would simplify the service greatly, at the expense of all of the overhead of NgRx.  If this were to be intended as a larger project, that overhead might be viable.

