import React from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { routes } from '../config/routes'

const Routers = (props) => {
    const { Store } = props
    const { authentication } = Store
    const { isAuth } = authentication

    return (
        <BrowserRouter>
            <React.Suspense fallback={null}>
                <Switch>
                    {
                        routes && routes.notAuth.map((route, index) =>
                            <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                render={() => {
                                    const ComponentRender = React.lazy(() => import(`./${route.component}`))
                                    return !isAuth ? <ComponentRender></ComponentRender> : <Redirect to='/'></Redirect>
                                }}
                            ></Route>
                        )
                    }
                    {
                        routes && routes.auth.map((route, index) =>
                            <Route
                                key={index}
                                exact={route.exact}
                                path={route.path}
                                component={() => {
                                    const ComponentRender = React.lazy(() => import(`./${route.component}`))
                                    return isAuth ? <ComponentRender></ComponentRender> : <Redirect to='/login'></Redirect>
                                }}
                            ></Route>
                        )
                    }

                </Switch>
            </React.Suspense>
        </BrowserRouter>
    )
}
const RouterApp = inject('Store')(observer(Routers))
export default RouterApp 