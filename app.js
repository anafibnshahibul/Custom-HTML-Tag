class TypeWriterComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const tagType = this.getAttribute('con') || 'p';
        const userStyle = this.getAttribute('style') || "";
        
        const customSpeed = parseInt(this.getAttribute('speed')) || 100;
        
        const fullContent = this.innerHTML.trim();
        this.innerHTML = ''; 

        const element = document.createElement(tagType);
        element.setAttribute('style', userStyle); 
        
        if (!element.style.color) {
            element.style.color = 'black';
        }
        
        element.style.display = 'inline-block';
        element.style.borderRight = '2px solid';
        
        this.appendChild(element);

        let i = 0;
        const type = () => {
            if (i < fullContent.length) {
                if (fullContent.substring(i, i + 4).toLowerCase() === '<br>') {
                    element.innerHTML += '<br>';
                    i += 4;
                } else {
                    element.innerHTML += fullContent.charAt(i);
                    i++;
                }
                setTimeout(type, customSpeed);
            } else {
                element.style.borderRight = 'none';
            }
        };

        type();
    }
}

customElements.define('type-writer', TypeWriterComponent);

class CopyCodeSimple extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const codeText = this.innerHTML.trim();
        const bgColor = this.getAttribute('bg') || '#1e293b'; 
        const textColor = this.getAttribute('color') || '#f8fafc'; 

        this.shadowRoot.innerHTML = `
        <style>
            :host {
                display: block; 
                margin: 15px 0;
            }
            .code-box {
                background: ${bgColor};
                color: ${textColor};
                padding: 12px 18px;
                border-radius: 10px;
                font-family: 'Courier New', Courier, monospace;
                font-size: 14px;
                border-left: 5px solid #4F46E5;
                box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                white-space: pre-wrap;
                word-break: break-all;
            }
        </style>
        <div class="code-box">${codeText}</div>
        `;
    }
}

customElements.define('cpc', CopyCodeSimple);
