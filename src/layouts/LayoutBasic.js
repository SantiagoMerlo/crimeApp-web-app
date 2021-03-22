import React from 'react';
import { Route, Switch } from "react-router-dom";
import { Layout } from 'antd';

export default function LayoutBasic(props){
    const { routes } = props;
    const { Header, Content, Footer } = Layout;

    return (
        <Layout>
            <h2>User Menu</h2>
            <Layout>
                <Header>Header...</Header>
                <Content>
                    <LoadRoutes routes={routes}/>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    );
}

function LoadRoutes({ routes }){
    return <Switch>
                {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.component}/> 
                ))}
            </Switch>;
}