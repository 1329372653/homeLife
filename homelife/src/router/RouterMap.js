import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Index from '../pages/index/Index'
import UserInfo from '../pages/userInfo/UserInfo'
import Setting from '../pages/setting/Setting'
import Category from '../pages/category/Category'
import GoodDetail from '../pages/goodDetail/GoodDetail'
import Exhibition from '../pages/exhibition/Exhibition'
import Decoration from '../pages/decoration/Decoration'
import Brand from '../pages/brand/Brand'
import Optimization from '../pages/optimization/Optimization'
import Information from '../pages/information/Information'
import InformationDetail from '../pages/informationDetail/InformationDetail'
import searchResult from '../pages/searchResult/SearchResult'

function RouterMap() {
    return (<Switch>
        <Route path='/' exact component={Index}></Route>
        <Route path='/userInfo' component={UserInfo}></Route>
        <Route path='/setting/userInfo' component={Setting}></Route>
        <Route path='/category/:category' component={Category}></Route>
        <Route path='/GoodDetail/:_id' component={GoodDetail}></Route>
        <Route path='/exhibition/:category' component={Exhibition}></Route>
        <Route path='/decoration/:category' component={Decoration}></Route>
        <Route path='/brand/:brand' component={Brand}></Route>
        <Route path='/optimization' component={Optimization}></Route>
        <Route path='/information' component={Information}></Route>
        <Route path='/informationDetail/:_id' component={InformationDetail}></Route>
        <Route path='/searchResult/:searchContent' component={searchResult}></Route>
        <Redirect to='/'></Redirect>
    </Switch>)
}

export default RouterMap;