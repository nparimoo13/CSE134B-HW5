  class ButtonCount extends HTMLElement
  {
    constructor()
    {
        super();

        let count = 0;

        //Create a new shadow root for the component
        //anywhere is javascript we have access to this class we have access to the shadow root
        const shadowRoot = this.attachShadow({ mode: 'open' }); 

        //define the HTML, template for the component
        //const template = document.createElement('template');
        const myBtn = document.createElement("button");
        myBtn.innerText = `Times Clicked: ${count}`;
        myBtn.addEventListener('click', () => {
            count = count + 1;
            myBtn.innerText = `Times Clicked: ${count}`;
        });

        shadowRoot.appendChild(myBtn);

    }
  }
  customElements.define('button-count', ButtonCount);