function loadPosts() {
    // Hier können Sie Ihre eigenen oder fremde LinkedIn Posts einfügen.
    // Sie benötigen dafür die ucgPost id.
    // Generell empfiehlt es sich, nicht mehr als 6 Posts einzufügen,
    // da sonst langsamere Geräte Schwierigkeiten haben, die Seite zu laden.
    // Mit dem Doppel-Slash // können Sie Kommentieren. Der Text rechts davon wird ignoriert.
    // Sie können damit z.B. dent Titel neben die ID hinschreiben, damit Sie den
    // Überblick beibehalten.
    // WICHTIG: Jede id muss in Anführungszeichen geschrieben, und mit einem Komma getrennt werden.

    // ##### HIER DIE IDs EINFÜGEN: #################################################################

    let linkedinIDList = [
        '6802968609326026752', // 2 Jahre UltraTEC
        '6801220526238003200', // Anlage A25
        '6798178778733531136', // Wir expandieren weiter
        '6796855173705797632', // neue Möglichkeit für Hersteller von Präzisionsteilen
        '6796844531997405184', // Ungeahnte Möglichkeiten für die Medizintechnik
        '6796016679525740544', // Steinmeier
    ];

    // ##############################################################################################
    // Der Rest des Scripts dient zur Logik. Einfach ignorieren...













    let linkedInContainer = document.querySelector('#linkedin_posts');
    let linkedInPost = (postId) => `<iframe
    src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:${postId}"
    height="550"
    width="500"
    frameborder="0"
    allowfullscreen=""
    title="Embedded post"
    class="rounded-lg shadow-md bg-white"
    ></iframe>`;


    let linkedinPosts = linkedinIDList.map((id) => linkedInPost(id));

    let postContainer = document.querySelector('#linkedin_posts');
    postContainer.innerHTML = '';
    linkedinPosts.forEach((post) => {
        postContainer.innerHTML += post;
    });
}