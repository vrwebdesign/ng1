class %nameUpper%Controller {
    name: string = '%name%';
}

import "%name%.component.scss";

export class %nameUpper% implements ng.IComponentOptions {
    static selector = '%name%';
    static template = require('./%name%.component.html');
    static bindings = {
    };
    static controller = %nameUpper%Controller;
}
