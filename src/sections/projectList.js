import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const ProjectList = () => {
    return (
        <div>
            <Container>
                <ImageWrapper>
                    <Link href="/" >
                        <img src='' height="100px" width='200px' alt='' />
                    </Link>
                </ImageWrapper>

                <Description>
                    <Title>  Aliquam facilisis in orci et mattis.</Title>
                    <Text>
                        Aliquam facilisis in orci et mattis. Duis et sem sit amet nibh euismod cursus. In sit amet metus purus. Sed tristique efficitur imperdiet. Proin ornare a nibh a tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </Description>
            </Container>
        </div>
    )
}

export default ProjectList

export const Container = styled.div`

display: flex;
justify-content: space-between;
align-items: center;
padding: 10px;

@media only screen and (max-width: 600px) {
 padding   : 5px ;
 flex-wrap:  wrap;
}
`

export const Title = styled.h1`

`
export const Description = styled.div`
@media only screen and (min-width: 600px) {
 max-width:  50%;
}
`
export const Text = styled.p`
text-align: start;
`
export const ImageWrapper = styled.div`
@media only screen and (min-width: 600px) {
 max-width:  50%;
}
`
