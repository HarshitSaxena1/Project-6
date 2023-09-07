import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme=extendTheme({


colors:{
p:{

orange:"#5F00D9",
black:"#171717",
},
black:{
5:"#F3F3F7",
10:"#EEEEF4",
20:"#D8DDE2",
40:"#ABAC4",
60:"#797E82",
80:"#535D66",
},
textStyles:{
h1: {
fontSize:{

  base:"30px",
  md:"32px",
},
color:"p.black",
lineHeight:{

  base:"34px",md:"36px",
},
},
},
},




 fonts: {
        heading: 'Ubuntu',
        body: "Ubuntu",
      },
      styles: {
        global: {
          // styles for the `body`
          body: {
            bg: "gray",
           
          },
        
        },
      },
})
withDefaultColorScheme({colorScheme:"purple"}); 