import React from "react";
import { Col, Card, Row, Breadcrumb, Button } from "react-bootstrap";

import baseHelper from "../../lib/helper";

const Categories = ({ updatedCategory, setSubCategories, setSelectedCategory }) => {
  return (
    <>
      <Breadcrumb>
        <Breadcrumb.Item href="#">Equipment Catalog</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        {updatedCategory &&
          updatedCategory.map((category) => {
            return (
              <>
              <Col xs={12} sm={12} md={3} lg={3} xl={3} style={{marginBottom: "30px"}}>
                <Card key={category.name} className="launch-card" role="button">
                    <Card.Img
                      variant="top"
                      src={
                        baseHelper.getImagePath(category.image, "category")
                      }
                      alt="No Image Found"
                    />
                  <Card.Body>
                      <Button style={{textAlign: "center"}}
                        type="button"
                        onClick={() => {
                          setSubCategories(category.subcategories)
                          setSelectedCategory(category.name)
                        }}
                        block
                        size="lg"
                      >
                        {category.name}
                        <i className="fas fa-chevron-right"></i>
                      </Button>
                  </Card.Body>
                </Card>
              </Col>
              </>
            )
          })}
      </Row>
    </>
  )
}

export default Categories;
