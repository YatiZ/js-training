import { Container, VStack, Text, SimpleGrid } from "@chakra-ui/react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import ProductCard from "../components/ProductCard";

const HomePage = () => {
    const {getProducts, products} = useProductStore();

    useEffect(()=>{
        getProducts();
    },[getProducts]);

    console.log(products)
  return (
    <Container maxW="container.xl" py={12}>
      <VStack spacing={8}>
        <Text
          fontSize={"30"}
          fontWeight={"bold"}
          bgGradient={"linear(to-r,cyan.400,blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
          Current Products
        </Text>

        {products.length === 0 && 
            <Text
            fontSize="xl"
            textAlign={"center"}
            fontWeight="bold"
            color="gray.500"
          >
            No products found{" "}
            <Text
              as="span"
              color="blue.500"
              _hover={{ textDecoration: "underline" }}
            >
              <Link to={"/create"}> Create a product</Link>
            </Text>
          </Text>
        }

        <SimpleGrid columns={{base:1, md:2,lg:3}} spacing={10} w={"full"}>
         {products.map((product)=>(
            <ProductCard key={product._id} product={product}/>
         ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default HomePage;
