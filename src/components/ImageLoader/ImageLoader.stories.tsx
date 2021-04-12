import { storiesOf } from '@storybook/react'
import * as React from 'react'
import ImageLoader from './index'
import { MemoryRouter } from 'react-router-dom'

storiesOf('Image Loader', module)
  .add('default', () => (
      <ImageLoader imgUrls={[
        'http://d3luy6srene196u.cloudfront.net/3/exhibitions/276/1920_1605701420.jpeg.webp?Expires=1606502547&Key-Pair-Id=K3NMLLOW30JRHK&Signature=GJ2lSC4l7zKpgHx28toPZFOsU4p9UKEeZ-yA7h7~EbWK071EupuvoU0Jh4dMktEHuxP4Eye1dTGInlVi3RIUEsjQ7K6oL1ISFPM3vVWji5hUQ-05hE1n7IHmv6M4Dezjz6bB4BXq3fOQg3qZF3xY0WhgnJUTy5y7WGn~MT~ajqBHPmdF9f7Qut9g~AZPsDYBy4~KNXSeGn1DlujlAMJctfWsgtYsQP6ucgA~QHdOaUBm~AtFVG3U1W0Jz9VCi8UDJfvgkbP8j0bLUrGwNUeDR9cI0aAdK1WnaEBbZQgczLZzfAzNQuXLZltULERwk17UWMkU0F5XnXWT0z~LJ8QmGg__',
        'https://d3luy6rene196u.cloudfront.net/3/exhibitions/276/1920_1605701420.jpeg.webp?Expires=1606501542&Key-Pair-Id=K3NMLLOW30JRHK&Signature=nw7yG0Y8WRqDxVPDN9lu~57NmFOyZx65YmCiiUlW5jGOXqaBvvBlfmbpE-m0nnGyLgpEZyxDBYWzUFeo39z7Nf-ofJDLCRvkIUWOblT92dMOeBxzOkNx3rQs-~XLzVz2V6UmyckYe-M7wQAgy4jrTw~o6p7Rgrs9Nz0KuWr57HVo0aTB7i~8Vw8spm1JwLBs0oPfQQ3q2y47VuHJ06WDXbuREegD2-LAIvnVvFNQsElR42fQCLw1PcnRAhoYqGvrbMVeh~zSyL8Ysf8CH7kTwaULeA47C4n-m~FqOd0XORmgerQ71yMWRC0EQN1lWlo1VUywF4CudkSiBNFVaFKqqg__',
      ]} />
  ))
;
