import React from "react";

import { Col, Card, Row, Breadcrumb, Button } from "react-bootstrap";

import baseHelper from "../../lib/helper";

const SubCategories = ({ subCategories, selectedCategory, setSubCategories }) => {
  const showImage = (imageName) => {
    const defaultImage = "https://via.placeholder.com/150?text=No Image";
    const imageUrl = baseHelper.getImagePath(imageName,"category/subcategory") || defaultImage;
    console.log("imag", imageUrl);
    return imageUrl;
  }
  
  return (
    <>
      <Breadcrumb >
        <Breadcrumb.Item href="#" onClick={() => setSubCategories([])}>Equipment Catalog</Breadcrumb.Item>
        <Breadcrumb.Item active>{selectedCategory}</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        {subCategories &&
          subCategories.map((subCategory) => {
            return (
              <Col xs={12} sm={12} md={3} lg={3} xl={3} style={{marginBottom: "30px"}}>
                <Card key={subCategory.name} className="launch-card" role="button">
                  <div style={{ textAlign: "center" }}>
                    <Card.Img
                      variant="top"
                      src={showImage(subCategory.image)}
                      alt="No Image Found"
                    />
                  </div>
                  <Card.Body>
                      <Button style={{textAlign: "center"}}
                        type="button"
                        onClick={() => true}
                        block
                        size="lg"
                      >
                        {subCategory.name}
                      </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
    </>
  );
};

export default SubCategories;
