import styled from "styled-components"
import React from "react"
import { ContainerStyled } from "../components/Container.styled"

const Footer = props => {
  return (
    <FooterStyled>
      <ContainerStyled>
        <FooterGrid>
          <FooterGridElement>
            <FooterInfo>
              <FooterTitle>Footer</FooterTitle>
              <FooterText>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </FooterText>
              <FooterSocial>
                <FooterSocialLink>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 430 430"
                    >
                      <g>
                        <path
                          id="LinkedIn"
                          d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
		c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
		v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
		C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
		c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
		 M5.477,420.56h92.184v-277.32H5.477V420.56z"
                        />
                      </g>
                    </svg>
                  </i>
                </FooterSocialLink>
                <FooterSocialLink>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 310.05 310.05"
                    >
                      <g>
                        <path
                          d="M245.265,31.772C223.923,11.284,194.388,0,162.101,0c-49.32,0-79.654,20.217-96.416,37.176
		c-20.658,20.9-32.504,48.651-32.504,76.139c0,34.513,14.436,61.003,38.611,70.858c1.623,0.665,3.256,1,4.857,1
		c5.1,0,9.141-3.337,10.541-8.69c0.816-3.071,2.707-10.647,3.529-13.936c1.76-6.495,0.338-9.619-3.5-14.142
		c-6.992-8.273-10.248-18.056-10.248-30.788c0-37.818,28.16-78.011,80.352-78.011c41.412,0,67.137,23.537,67.137,61.425
		c0,23.909-5.15,46.051-14.504,62.35c-6.5,11.325-17.93,24.825-35.477,24.825c-7.588,0-14.404-3.117-18.705-8.551
		c-4.063-5.137-5.402-11.773-3.768-18.689c1.846-7.814,4.363-15.965,6.799-23.845c4.443-14.392,8.643-27.985,8.643-38.83
		c0-18.55-11.404-31.014-28.375-31.014c-21.568,0-38.465,21.906-38.465,49.871c0,13.715,3.645,23.973,5.295,27.912
		c-2.717,11.512-18.865,79.953-21.928,92.859c-1.771,7.534-12.44,67.039,5.219,71.784c19.841,5.331,37.576-52.623,39.381-59.172
		c1.463-5.326,6.582-25.465,9.719-37.845c9.578,9.226,25,15.463,40.006,15.463c28.289,0,53.73-12.73,71.637-35.843
		c17.367-22.418,26.932-53.664,26.932-87.978C276.869,77.502,265.349,51.056,245.265,31.772z"
                        />
                      </g>
                    </svg>
                  </i>
                </FooterSocialLink>
                <FooterSocialLink>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 612 612"
                    >
                      <g>
                        <path
                          d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411
			c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513
			c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101
			c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104
			c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194
			c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485
			c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z"
                        />
                      </g>
                    </svg>
                  </i>
                </FooterSocialLink>
                <FooterSocialLink>
                  <i>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      viewBox="0 0 96.124 96.123"
                    >
                      <g>
                        <path
                          d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803
		c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654
		c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246
		c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z"
                        />
                      </g>
                    </svg>
                  </i>
                </FooterSocialLink>
              </FooterSocial>
            </FooterInfo>
          </FooterGridElement>
          <FooterGridElement>
            <FooterMerch>
              <FooterList>
                <FooterListItem primary>Men</FooterListItem>
                <FooterListItem>Shirts</FooterListItem>
                <FooterListItem>Jackets</FooterListItem>
                <FooterListItem>Jeans</FooterListItem>
                <FooterListItem>Jackets</FooterListItem>
                <FooterListItem>Jeans</FooterListItem>
              </FooterList>
              <FooterList>
                <FooterListItem primary>Women</FooterListItem>
                <FooterListItem>Shirts</FooterListItem>
                <FooterListItem>Jackets</FooterListItem>
                <FooterListItem>Jeans</FooterListItem>
                <FooterListItem>Jackets</FooterListItem>
                <FooterListItem>Jeans</FooterListItem>
              </FooterList>
              <FooterList>
                <FooterListItem primary>Kids</FooterListItem>
                <FooterListItem>Shirts</FooterListItem>
                <FooterListItem>Jackets</FooterListItem>
                <FooterListItem>Jeans</FooterListItem>
                <FooterListItem>Jackets</FooterListItem>
                <FooterListItem>Jeans</FooterListItem>
              </FooterList>
            </FooterMerch>
          </FooterGridElement>
          <FooterGridElement>
            <FooterNewsletterForm>
              <FooterNewsletterLabel>Newsletter</FooterNewsletterLabel>
              <FooterNewsletterInput>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 483.3 483.3"
                >
                  <g>
                    <g>
                      <path
                        d="M424.3,57.75H59.1c-32.6,0-59.1,26.5-59.1,59.1v249.6c0,32.6,26.5,59.1,59.1,59.1h365.1c32.6,0,59.1-26.5,59.1-59.1
			v-249.5C483.4,84.35,456.9,57.75,424.3,57.75z M456.4,366.45c0,17.7-14.4,32.1-32.1,32.1H59.1c-17.7,0-32.1-14.4-32.1-32.1v-249.5
			c0-17.7,14.4-32.1,32.1-32.1h365.1c17.7,0,32.1,14.4,32.1,32.1v249.5H456.4z"
                      />
                      <path
                        d="M304.8,238.55l118.2-106c5.5-5,6-13.5,1-19.1c-5-5.5-13.5-6-19.1-1l-163,146.3l-31.8-28.4c-0.1-0.1-0.2-0.2-0.2-0.3
			c-0.7-0.7-1.4-1.3-2.2-1.9L78.3,112.35c-5.6-5-14.1-4.5-19.1,1.1c-5,5.6-4.5,14.1,1.1,19.1l119.6,106.9L60.8,350.95
			c-5.4,5.1-5.7,13.6-0.6,19.1c2.7,2.8,6.3,4.3,9.9,4.3c3.3,0,6.6-1.2,9.2-3.6l120.9-113.1l32.8,29.3c2.6,2.3,5.8,3.4,9,3.4
			c3.2,0,6.5-1.2,9-3.5l33.7-30.2l120.2,114.2c2.6,2.5,6,3.7,9.3,3.7c3.6,0,7.1-1.4,9.8-4.2c5.1-5.4,4.9-14-0.5-19.1L304.8,238.55z"
                      />
                    </g>
                  </g>
                </svg>

                <input type="text" placeholder="E-mail" />
              </FooterNewsletterInput>
              <FooterNewsletterCopyright>
                Copyright &copy; 2019 MCT <br /> All rights reserved
              </FooterNewsletterCopyright>
            </FooterNewsletterForm>
          </FooterGridElement>
        </FooterGrid>
      </ContainerStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  padding: 40px 0;
  background: #4e4d5a;
`
const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`
const FooterGridElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 100%;

  :nth-of-type(2) {
    border-left: 1px solid #6a6975;
    border-right: 1px solid #6a6975;

    @media (max-width: 1000px) {
      border-left: none;
    }

    @media (max-width: 576px) {
      border: none;
    }
  }
`

const FooterNewsletterForm = styled.form`
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

const FooterNewsletterLabel = styled.label`
  font-size: 18px;
  color: white;
  text-transform: uppercase;
  text-align: left;
`

const FooterNewsletterInput = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: relative;

  svg {
    position: absolute;
    right: 20px;
    width: 20px;
    height: 20px;
    fill: #4e4d5a;
  }

  input {
    background: #6a6975;
    color: white;
    border: none;
    height: 50px;
    padding-left: 10px;
    margin: 20px 0;
    width: 100%;

    ::placeholder {
      color: #c9d2d8;
    }
  }
`

const FooterNewsletterCopyright = styled.p`
  color: #c9d2d8;
  font-size: 18px;
  text-align: right;
`

const FooterMerch = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 0 20px;
  max-width: 100%;
`

const FooterList = styled.ul``

const FooterListItem = styled.li`
  list-style: none;
  color: ${props => (props.primary ? "white" : "#C9D2D8")};
  margin-bottom: ${props => (props.primary ? "10px" : "4px")};
  text-transform: ${props => (props.primary ? "uppercase" : "normal")};
`

const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const FooterTitle = styled.h3`
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  text-transform: uppercase;
`

const FooterText = styled.p`
  color: #c9d2d8;
  font-size: 18px;
`

const FooterSocial = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
`

const FooterSocialLink = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  width: 40px;
  height: 40px;
  background: #6a6975;
  margin-right: 10px;

  :hover {
    background: #3979f3;
  }
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    svg {
      width: 20px;
      height: 20px;
      fill: white;
    }
  }
`

export default Footer
