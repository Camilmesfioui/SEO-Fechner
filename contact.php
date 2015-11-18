<?php include ('header.php'); ?>

<!-- Contact Form -->

<div class="container">
    <div class="row">
        <div class="col-md-5">
            <p>
                Vous recherchez un chef de projet, un spécialiste de la stratégie digitale, un

                consultant indépendant digital spécialiste des techniques de l'information et de la

                communication, un spécialiste <b>référencement SEO</b> ou un formateur, le tout dans le <b>Val

                d’Oise (95)</b>, contactez moi.

                Je peux me mobiliser rapidement si vous avez besoin de <b>conseils (SEO,

                référencement</b>, web ou autre) ou d'accompagnement dans le <b>Val d’Oise (95)</b>,

                en France ou à l'International.

                Je suis également joignable par mail ou par téléphone mais aussi via divers

                réseaux sociaux (Facebook, Twitter, LinkedIn) ou en remplissant ce formulaire.
            </p>
        </div>
        <div class="col-md-7 contact-right">
            <form method="post" action="contact.php" id="contact-us">
                <div class="col-md-5 col-sm-5 col-xs-12 animated hiding" data-animation="slideInLeft">
                    <div class="form-group">
                        <input id="name" type="text" name="fullname" class="form-control input-lg" placeholder="Nom">
                    </div>
                    <div class="form-group">
                        <input id="mail" type="email" name="email" class="form-control input-lg" placeholder="Email">
                    </div>
                    <div class="form-group">
                        <input id="phone" type="text" name="phone" class="form-control input-lg" placeholder="Téléphone">
                    </div>
                </div>
                <div class="col-md-7 col-sm-7 col-xs-12 animated hiding" data-animation="slideInRight">
                    <div class="form-group">
                        <textarea id="message" name="message" class="form-control input-lg" placeholder="Message"></textarea>
                    </div>
                </div>
                <input id="button-contact" type="submit" class="btn btn-custom up animated hiding" value="Envoyer Message" data-animation="fadeInUpBig">
            </form>

        </div>
    </div>
</div>

<!-- Fin Contact Form -->

<?php include ('footer.php'); ?>
