export default class ComponentFactory {
    createCard(title, subtitle, text, buttons){
        return $(`
                <div class="col mb-4">
                    <div class="card">
                         <div class="card-body">
                            <h4 class="card-title">${title}</h4>
                            <h6 class="card-subtitle mb-2 pb-2 text-muted border-bottom">${subtitle}</h6>
                            <p class="card-text mb-4">${text}</p>
                            
                            ${buttons}
                         </div>
                    </div>
                </div>`
        );
    }
}