import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'antd'
import { observer, inject } from 'mobx-react'
import { routes } from '../config/routes'

const RouterApp = inject(({ Store }) => Store)(
    observer((props) => {
        const {
            authentication: { isAuth },
        } = props;
        return (
            <BrowserRouter>
                <React.Suspense fallback={null}>
                    <Switch>
                        {
                            !isAuth && routes.notAuth.map((route, index) =>
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    path={route.path}
                                    render={() => {
                                        const ComponentRender = React.lazy(`import from './${route.component}'`)
                                        return <ComponentRender></ComponentRender>
                                    }}
                                ></Route>
                            )
                        }
                        {
                            !!isAuth && routes.auth.map((route, index) =>
                                <Route
                                    key={index}
                                    exact={route.exact}
                                    path={route.path}
                                    component={() => {
                                        const ComponentRender = React.lazy(`import from './${route.component}'`)
                                        return <ComponentRender></ComponentRender>
                                    }}
                                ></Route>
                            )
                        }
                    </Switch>
                </React.Suspense>
            </BrowserRouter>
        )
    })
);

export default RouterApp 