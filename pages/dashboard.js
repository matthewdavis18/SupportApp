
 export async function getServerSideProps(context) {
     const init = {
         method:'get',
         headers:{
             authorization:'process.env.KEY'
             

         }
     }
   const data = fetch('https://upside.zendesk.com/api/v2/search/count?query=created>2021-05-01 created<2021-05-31 custom_field_33985008:"offer__expired/declined"',init
   );
   return {
     props: { data }, // will be passed to the page component as props
   };
 }


function Dashboard() {
   
  
  return <div>data.count</div>;
}

export default Dashboard 
