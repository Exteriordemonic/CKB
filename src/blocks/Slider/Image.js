import styled from "styled-components"

const Image = styled.div`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  &.image-exit {
    opacity: 1;
    transition: 0.8s;

    &-active {
      opacity: 0;
    }
  }

  &.image-enter {
    opacity: 0;

    &-done {
      opacity: 1;
    }
  }

  .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

`

export default Image
