import React, { Component } from 'react'
// import Layout from 'antd/lib/layout'
import { Row, Col } from 'antd'

class ComponentMobileFooter extends Component {
    render() {
        return (
            <div class = 'mobileComtainer'>
                <footer class = 'footer'>
                    <Row>
                        <Col span = { 2 }></Col>
                        <Col span = { 20 }>
                        &copy;&nbsp;2016 ReactNews. All Rights Reserverd.
                        </Col>
                        <Col span = { 2 }></Col>
                    </Row>
                </footer>
            </div>    
        )
    }
}

export { ComponentMobileFooter }