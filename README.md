#Code Jam - Veggy UI

###TODO
- [x] Get elenco pomodori fatti 
- [x] Get elenco
- [x] FIX: error bar viene visualizzata ad-cazzum
- [x] Sul main, se non c'e' nello storage il login fa redirect su login
- [x] Separare i reducer nei 2 moduli (login, main)
- [x] Rename ErrorBar
- [x] Create oggetto per invio centralizzato dei comandi 
- [x] Trasformare i componenti stateless in funzioni
- [x] Gestire 404 su chiamata latest-pomodoro
- [x] Gestione pomodoroVoided
- [x] Togliere me stesso dalla lista degli utenti con cui sharo il pomodoro 
- [x] Aggiungere pomodoro a lista task non appena avviato
- [x] Aggiungere global settings per env
- [x] StartSharedPomodoro con payload timerIds degli utenti coinvolti
- [x] Aggiungere gestione voidedPomodoro per gestione errori
- [x] Quando ricevo un messaggio StartSharedPomodoro devo mostrare con chi lo sto facendo (attendo API)
- [-] Gestione pomodori offline
  - Se l'utente e' online l'ownership del pomodoro e' sul server e se l'utente va offline puo' solo aspettare che finisca il pomodoro
  - Se l'utente e' offline l'ownership del pomodoro e' del client e quando ha finito il pomodoro e si e' riconesso invia al server il log dei pomodori fatti
  - Su avvia pomodoro offline aggiungo a lista e faccio partire
  - Su lista ho pulsante per inviare il pomodoro al server
- [x] Visualizzare su pagina sengale online/offline
- [ ] La connessione al websocket andrebbe fatta sulla callback della post al login
- [ ] FIX: Warning: setState(...): Can only update a mounted or mounting component. Sul passaggio da login a main.
- [ ] Scrivere test di copertura
- [ ] Rimuovere pulsanti [start|stop]shared pomodoro 
  


##Discuss
- Quando si collega un nuovo utente va inviato un evento
- Introdurre stream?


