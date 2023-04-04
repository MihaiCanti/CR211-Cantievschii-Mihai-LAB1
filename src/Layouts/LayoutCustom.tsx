import { Layout, Menu, Breadcrumb } from "antd";
import { ContentLayout } from './ContentLayout';
import './LayoutC.css';
import { Forms } from '../Form/Forms';

const { Header, Content, Footer } = Layout;

const Informations = [
    {
        id: 1,
        title: "Number 1",
        description: "Description"
    },
    {
        id: 2,
        title: "Number 2",
        description: "Description"
    },
    {
        id: 3,
        title: "Number 3",
        description: "Description"
    },
    {
        id: 4,
        title: "Number 4",
        description: "Description"
    },
    {
        id: 5,
        title: "Number 5",
        description: "Description"
    },


]


export const LayoutCustom = () =>{
    return(
        <>
            <Layout className="layout">
                <Header style={{
                    backgroundColor: "#767676",
                    position: "fixed",
                    width: "100%",
                    zIndex: 9999
                }}>
                    <div className="logo" >
                        <img src="https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/01-nvidia-logo-horiz-500x200-2c50-p@2x.png"
                        style={{
                            width: 110
                        }} />
                    </div>
                    <Menu mode="horizontal" defaultSelectedKeys={['2']} style={{
                    backgroundColor: "#767676",
                    }}>
                        {new Array(4).fill(null).map((_, index) => {
                            const key = index + 1;
                            return <Menu.Item key={key}>{`Interface${key}`}</Menu.Item>;
                        })}
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        <Breadcrumb.Item>ThisNode</Breadcrumb.Item>
                    </Breadcrumb>

                    <div className="site-layout-content">
                        {   Informations.map((el, index) =>{
                            return(
                                <ContentLayout key={el.id} title={el.title} description={el.description} />
                            )
                        })
                        }

                    </div>
                    <Forms></Forms>
                </Content>
            </Layout>,
        </>
    )
}

