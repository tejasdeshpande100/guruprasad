import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import { Row, Col } from "react-bootstrap";
import Lasik1Img from "@/images/media/lasik-1.jpg";
import Squint1Img from "@/images/media/squint-1.jpg";
import Squint2Img from "@/images/media/squint-2.jpg";
import Squint3Img from "@/images/media/squint-3.jpg";
import Squint4Img from "@/images/media/squint-4.jpg";
import Image from "next/dist/client/image";

const Media = () => {
  return (
    <MenuContextProvider>
    <Layout PageTitle="Media">
      <HeaderOne />
      <PageHeader title="Media" name="Media" />
  
      <div className="mt-4 p-4">
        <Row>
          <Col lg={2} md={2} sm={12} xs={12}>
            
            <Image src={Lasik1Img} />
          
           
          </Col>
          <Col lg={10} md={10} sm={12} xs={12}>
            <div className="pl-5">
              
              <p
                style={{
                  marginTop: "30px"
                }}
              >
                <div>Mr. Mahesh meghmale </div>
              
Dear Neha mam, 
I don’t have enough words to thank you . I underwent LASIK with you and it was a dream come true to go spectless at the age of 48 . Thanks for enabling me to see the world without Spects . Feel blessed for this miracle.
              </p>
             
            </div>
          </Col>
          
        </Row>
        <div style={{width:'100%', border:'solid 1px grey', margin:'0 auto 10px auto'}}></div>
        <Row>
          <Col lg={2} md={2} sm={12} xs={12}>

            <Image src={Squint3Img} />
            <Image src={Squint1Img} />
            
          </Col>
          <Col lg={10} md={10} sm={12} xs={12}>
            <div className="pl-5">
              
              <p
                style={{
                  marginTop: "30px",
                }}
              >
                <div>Miss Shivani Kalyan Jadhav </div>       
Dear Neha mam 
I had a number of -7.0 for both eyes and my marriage was due in 3 weeks . I underwent LASIK with u and went spectacle free . Thanks for making my wedding a memorable one .
              </p>
             
            </div>
          </Col>
          
        </Row>
        <div style={{width:'100%', border:'solid 1px grey', margin:'0 auto 10px auto'}}></div>
        <Row>
          <Col lg={2} md={2} sm={12} xs={12}>

            <Image src={Squint2Img} />
            <Image src={Squint4Img} />

          </Col>
          <Col lg={10} md={10} sm={12} xs={12}>
            <div className="pl-5">
              
              <p
                style={{
                  marginTop: "30px"
                }}
              >
                <div>Sangeeta Umesh Aade
Daughter Diksha Umesh Ade</div>
              
                
respected Neha mam ,
I got my daughter diksha operated for squint and was so happy with the the results that I a mom of 4 kids decided to get my eyes also aligned. Thanks for making me look beautiful.
              </p>

            </div>
            
          </Col>
        </Row>
      </div>
      <Footer />
    </Layout>
  </MenuContextProvider>
  );
};
export default Media;
