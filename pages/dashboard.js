
 export async function getServerSideProps(context) {
     const init = {
         method:'get',
         headers:{
             authorization:'process.env.KEY'
             

         }
     }
   const data = await fetch(`https://upside.zendesk.com/api/v2/search/count?query=created>2021-05-01 created<2021-05-31 custom_field_33985008:"offer__expired/declined"`,init
   );
   const count = await JSON.stringify(data)
   return {
     props: { count }, // will be passed to the page component as props
   };
 }


function Dashboard(count) {
   
  
  return <div>{count.count}</div>;
}

export default Dashboard 
