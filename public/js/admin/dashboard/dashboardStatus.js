
import {jsError} from './../../jsError.js';
import {parserReadWrite} from './../../onh/parser/parserReadWrite.js';
import {cycleTime} from './cycleTime.js';

// Page loaded
document.addEventListener('DOMContentLoaded', function () {
    
    // Parser
    let pr = new parserReadWrite();
    
    // Cycle times
    let cycleUpdater = new cycleTime("process", true);
    let cyclePolling = new cycleTime("polling", true);
    let cycleLogger = new cycleTime("tagLogger");
    let cycleLoggerWriter = new cycleTime("tagLoggerWriter");
    let cycleAlarming = new cycleTime("alarming");
    let cycleScript = new cycleTime("script");
    
    // Pooling timer
    let dashboardTid;
        
    // Dashboard status
    function poolingDashboardStatus() {
        // Get cycle times
        pr.getCycleTimes().then(
            reply => { parseCycleTimes(reply); },
            error => { jsError.add(error); }
        );
    }
    
    // Get cycle times
    function parseCycleTimes(reply) {
        
        // Clear cycle times
        cycleUpdater.clear();
        cyclePolling.clear();
        cycleLogger.clear();
        cycleLoggerWriter.clear();
        cycleAlarming.clear();
        cycleScript.clear();

        cycleUpdater.setValue(reply.Updater);
        cyclePolling.setValue(reply.Polling);
        cycleLogger.setValue(reply.Logger);
        cycleLoggerWriter.setValue(reply.LoggerWriter);
        cycleAlarming.setValue(reply.Alarming);
        cycleScript.setValue(reply.Script);

        // Set next tik
        dashboardTid = setTimeout(poolingDashboardStatus, 1000);
    }
    
    // Get status
    poolingDashboardStatus();
});