import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Layout = ({ children, role }) => {
    const backgroundAnimation = useSpring({
        from: { backgroundColor: '#fff' },
        to: { backgroundColor: role === 'admin' ? '#e0e0e0' : '#f0f0f0' },
        config: { duration: 1000 },
      });
    

    const Container = styled(animated.div)`
        display: flex;
        flex-direction: column;
        min-height: 200vh;
        border:10px;
        border-color:grey;
        background-color: ${backgroundAnimation.backgroundColor};
    `;

    const Content = styled.div`
        flex: 1;
        padding: 2rem;
        display: flex;
        flex-direction:column;
        align-items: center;
    `;

    return (
        <Container>
            <Content>{children}</Content>
        </Container>
    );
};

export default Layout;
