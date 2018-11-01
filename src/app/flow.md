Browser loads index.html
<h1> Angular is Loading...
</h1> is displayed
runtime,polyfills,..vendor,..main.js downloaded
platformBrowserDynamics()
            .bootstrapModule(AppModule);executed


        4.1 BrowserModule loaded,then CommonModule,compiler loaded
        4.2 Angular scans declaration
                [Angular detected all components/pipe/services,selector,etc]
            ***JIT
        4.3 Angular search for bootstrap section
                                    [AppComponent]

        4.4 Create Appcomponent Instance
        4.5 Take app.component ,view,place 