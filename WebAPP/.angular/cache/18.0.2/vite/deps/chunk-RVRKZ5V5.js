import {
  DomHandler
} from "./chunk-TKJMWDM5.js";
import {
  DOCUMENT,
  isPlatformBrowser
<<<<<<<< HEAD:WebAPP/.angular/cache/18.0.2/vite/deps/chunk-RVRKZ5V5.js
} from "./chunk-JVYDLPP5.js";
========
} from "./chunk-NIOFTOD7.js";
>>>>>>>> 2eabbdd (CADASTRO PET):WebAPP/.angular/cache/18.0.2/vite/deps/chunk-5FEHJEIP.js
import {
  Directive,
  ElementRef,
  Input,
  NgModule,
  PLATFORM_ID,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule
<<<<<<<< HEAD:WebAPP/.angular/cache/18.0.2/vite/deps/chunk-RVRKZ5V5.js
} from "./chunk-RKTYYQA2.js";
========
} from "./chunk-AG4Y745J.js";
>>>>>>>> 2eabbdd (CADASTRO PET):WebAPP/.angular/cache/18.0.2/vite/deps/chunk-5FEHJEIP.js

// node_modules/primeng/fesm2022/primeng-autofocus.mjs
var AutoFocus = class _AutoFocus {
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus = false;
  focused = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  host = inject(ElementRef);
  ngAfterContentChecked() {
    if (this.autofocus === false) {
      this.host.nativeElement.removeAttribute("autofocus");
    } else {
      this.host.nativeElement.setAttribute("autofocus", true);
    }
    if (!this.focused) {
      this.autoFocus();
    }
  }
  ngAfterViewChecked() {
    if (!this.focused) {
      this.autoFocus();
    }
  }
  autoFocus() {
    if (isPlatformBrowser(this.platformId) && this.autofocus) {
      setTimeout(() => {
        const focusableElements = DomHandler.getFocusableElements(this.host?.nativeElement);
        if (focusableElements.length === 0) {
          this.host.nativeElement.focus();
        }
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        }
        this.focused = true;
      });
    }
  }
  static ɵfac = function AutoFocus_Factory(t) {
    return new (t || _AutoFocus)();
  };
  static ɵdir = ɵɵdefineDirective({
    type: _AutoFocus,
    selectors: [["", "pAutoFocus", ""]],
    hostAttrs: [1, "p-element"],
    inputs: {
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    standalone: true,
    features: [ɵɵInputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocus, [{
    type: Directive,
    args: [{
      selector: "[pAutoFocus]",
      standalone: true,
      host: {
        class: "p-element"
      }
    }]
  }], null, {
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var AutoFocusModule = class _AutoFocusModule {
  static ɵfac = function AutoFocusModule_Factory(t) {
    return new (t || _AutoFocusModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AutoFocusModule,
    imports: [AutoFocus],
    exports: [AutoFocus]
  });
  static ɵinj = ɵɵdefineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AutoFocusModule, [{
    type: NgModule,
    args: [{
      imports: [AutoFocus],
      exports: [AutoFocus]
    }]
  }], null, null);
})();

export {
  AutoFocus,
  AutoFocusModule
};
<<<<<<<< HEAD:WebAPP/.angular/cache/18.0.2/vite/deps/chunk-RVRKZ5V5.js
//# sourceMappingURL=chunk-RVRKZ5V5.js.map
========
//# sourceMappingURL=chunk-5FEHJEIP.js.map
>>>>>>>> 2eabbdd (CADASTRO PET):WebAPP/.angular/cache/18.0.2/vite/deps/chunk-5FEHJEIP.js