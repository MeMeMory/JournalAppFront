import { FC } from 'react'

import Layout from '@/ui/layout/Layout'

const Students: FC = () => {
  // const { data: products, isLoading } = useQuery(
  //   ['products'],
  //   () => ProductService.getProducts(),
  //   {
  //     select: ({ products }) => products
  //   }
  // )

  return (
    <Layout title='Shop the Collection'>
      {/* {isLoading ? (
        <div className={styles.loader}>Loading...</div>
      ) : products?.length ? (
        <div className={styles.grid}>
          {products.map(product => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div>Product not found</div>
      )} */}
    </Layout>
  )
}

export default Students
