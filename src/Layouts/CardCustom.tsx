import { Button, Checkbox, Col, Input, Row, Space } from 'antd'
import Card from 'antd/lib/card'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { IContentModel } from '../interface/mainInterface'


export const CardCustom = observer(({ content }: { content: IContentModel }) => {

    const { title, description, notes, changeNotes, isSeen, changeSeen, seen, addNote, removeNote } = content


    useEffect(() => {
        if (isSeen) {
            console.log('>>title', title)
        }
    }, [ isSeen ])

    return (
        <Row align="bottom" justify="center" gutter={16}>
            <Col span={12}>
            <Card title={ title } bordered={ false }>
            <p>{ description }</p>

            <Input
                value={ notes }
                placeholder={ notes }
                onChange={ (e) => changeNotes(e.target.value) }
            />

            <Checkbox defaultChecked={ seen } checked={ seen } style={{
                marginLeft: "20px"
            }} onChange={ (e) => changeSeen(e.target.checked) } />

        </Card>
            </Col>

            <Col span={6} style={{paddingBottom: "22px"}}>
            <Button onClick={ addNote } style={{
                backgroundColor: "#76b900",
                marginRight: "15px"
            }}>Add Note</Button>
            <Button onClick={ removeNote } style={{
                backgroundColor: "#710c04",
                color: "#fff"
            }}>Remove Note</Button>
            </Col>
        </Row>
    )

})