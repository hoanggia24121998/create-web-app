import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin } from '@microsoft/applicationinsights-react-js';
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({ basename: '' });

export var reactPlugin = new ReactPlugin();
export var appInsights = new ApplicationInsights({
  config: {
    connectionString: 'InstrumentationKey=6c5c011f-85ce-4a3f-9257-ddb9abdce0a2;IngestionEndpoint=https://japaneast-1.in.applicationinsights.azure.com/;LiveEndpoint=https://japaneast.livediagnostics.monitor.azure.com/',
    enableAutoRouteTracking: true,    // true if used for react-router v6
    autoTrackPageVisitTime: true,
    extensions: [reactPlugin],
    extensionConfig: {
      [reactPlugin.identifier]: { history: browserHistory }
    }
  }
});
