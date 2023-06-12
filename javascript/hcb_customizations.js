function waitForElement(id, callback){
    var wait = setInterval(function(){
        if(document.getElementById(id)){
            clearInterval(wait);
            callback();
        }
    }, 100);
}

waitForElement("comments_list", function(){
    injectHcbChanges();
});


function injectHcbChanges(){

    $('#HCB_comment_box > h3 + style').remove();
    $('div[id*="comments"] a').find('img').closest('a').wrap('<div id="cmt-image-wrapper"></div>');
    $('#hcb_form_name_container #hcb_form_name').after('<input id="hcb_form_pfp" type="text" value="" placeholder="Profile Image url">');
    $('div[id*="comments"] blockquote').prepend('<img id="pfp-img" src="https://i.imgur.com/1U0oOLS.png" onerror="this.src="https://i.imgur.com/1U0oOLS.png";"><div id="hcb_cmt_arrow"></div><div></div>');
    $('div[id*="comments"] .hcb-flag').remove();
    $('.hcb-comment-tb button').empty();
    $('.hcb-comment-tb .hcb-like').text('Like');
    $('.hcb-comment-tb .hcb-reply').text('Reply');
    //$('.hcb-comment-tb .hcb-reply').each($(this).insertBefore('.hcb-comment-tb .hcb-like'));
    $('.hcb-comment-tb').before('<div id="cmt-bottom"></div>');
    $('#hcb_form_content').attr('value', '');
    $('#hcb_file').remove();
    $('#hcb_file_label').remove();
    $('.hcb-comment-body').before('<hr class="divider line-neutral">');
    $('#comments_list .likes img').replaceWith('<i></i>');
    /*$('#comments_list .likes').hover( function(){
        $(this).find('i').addClass('emoticon-gaggle').removeClass('emoticon-thumbsup')
            }, function(){
        $(this).find('i').addClass('emoticon-thumbsup').removeClass('emoticon-gaggle')
    });*/
    //var likes = $('div[id*="comments"] blockquote hr');
    //$('#comments_list div.likes').prependTo(likes);
    //var likes = $('div[id*="comments"] blockquote hr');
    //$('div[id*="comments"]').each(function() {
        //$('div[id*="comments"] div.likes').prependTo(likes);
    //});
    $('div.hcb-wrapper').after(`
    
        <div id="hcba_toolbar">
            <span id="open-modal"><i class="icon emoticon-thumbsup"></i>Emoticon</span>
            <dialog id="myDialog" >
                <div id="myDiv">
                    <div>
                        <h2>Emoticons</h2>
                        <img id="emoteModalClose" onclick="myDialog.close();" src="https://www.svgrepo.com/show/488863/close-circle.svg">
                        <div>
                            <span id="emote-sel-official">Official</span>
                            <span id="emote-sel-community">Community</span>
                            <span id="emote-sel-kaomoji">Kaomoji</span>
                        </div>
                    </div>
                    <div id="emote-tab-official">
                        <div>
                            <span class="copy-emote"><i class="emoticon emoticon-thumbsup"></i><div>:thumbsup:</div></span>
                            <span class="copy-emote"><i class="emoticon emoticon-screaming-cry"></i><div>:screaming-cry:</div></span>
                            <span class="copy-emote"><i class="emoticon emoticon-poggles"></i><div>:poggles:</div></span>
                            <span class="copy-emote"><i class="emoticon emoticon-burning-rage"></i><div>:burning-rage:</div></span>
                            <span class="copy-emote"><i class="emoticon emoticon-rip-fella"></i><div>:rip-fella:</div></span>
                            <span class="copy-emote"><i class="emoticon emoticon-gaggle"></i><div>:gaggle:</div></span>
                            <span class="copy-emote"><i class="emoticon emoticon-missingno"></i><div>:missingno:</div></span>
                        </div>
                    </div>
                    <div id="emote-tab-community">
                        <div>
                            <span class="copy-emote"><i class="emoticon emoticon-missingno"></i><div>:missingno:</div></span>
                        </div>
                    </div>
                    <div id="emote-tab-kaomoji">
                        <div>
                            <div>
                                Happy
                            </div>
                            <div>
                                <div class="copy-emote">(* ^ ω ^)</div>
                                <div class="copy-emote">☆*:.｡.o(≧▽≦)o.｡.:*☆</div>
                            </div>
                            <div>
                                <div class="copy-emote">(¬‿¬ )</div>
                                <div class="copy-emote">(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</div>
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                Sad
                            </div>
                            <div>
                                <div class="copy-emote">｡･ﾟﾟ*(>д<)*ﾟﾟ･</div>
                                <div class="copy-emote">(╥﹏╥)</div>
                            </div>
                            <div>
                                <div class="copy-emote">(ノ_<。)</div>
                                <div class="copy-emote">o(TヘTo)</div>
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                Anger
                            </div>
                            <div>
                                <div class="copy-emote">٩(╬ʘ益ʘ╬)۶</div>
                                <div class="copy-emote">凸(´△´＃)</div>
                            </div>
                            <div>
                                <div class="copy-emote">((╬◣﹏◢))</div>
                            </div>
                        </div>
                        
                        <div>
                            <div>
                                Fear
                            </div>
                            <div>
                                <div class="copy-emote">▓▒░(°◡°)░▒▓</div>
                                <div class="copy-emote">＼(º □ º l|l)/</div>
                            </div>
                            <div>
                                <div class="copy-emote">Σ(°△°|||)</div>
                                <div class="copy-emote">..・ヾ(。＞＜)シ</div>
                            </div>
                        </div>
                        
                    </div>
                    <div>
                        <input value="" id="emote-input" type="text">
                    </div>
                </div>
            </dialog>
            
            <span><i class="icon icon-smile"></i>Open JS Paint</span>
            <input type="file" name="hcb_file" id="hcb_file" class="inputfile" title="upload image">
            <label id="hcb_file_label" for="hcb_file" title="upload image">
                <a class="btn btn-secondary">
                    <span><i class="icon icon-portrait"></i>Add Image</span>
                </a>
            </label>
            <span id="open-modal-help"><i class="icon icon-smile"></i>FAQs and help</span>
            <dialog id="myDialog-help" >
                <div id="myDiv-help">
                    content
                </div>
            </dialog>
        </div>`);
    $('#hcba_toolbar #myDialog #myDiv #emoteModalClose').hover( function(){
        $(this).attr('src', 'https://www.svgrepo.com/show/488118/close-circle.svg')
            }, function(){
         $(this).attr('src', 'https://www.svgrepo.com/show/488863/close-circle.svg')
    });

    
    $('#comments_list div[id*="comment"] .likes span').each( function(){
        var likeNum = parseInt($(this).text());

        //console.log("this has " + likeNum + " likes")
        if(likeNum <= 0){
            $(this).parent().find('i').attr("class","emoticon emoticon-screaming-cry");
            
        } else {
            $(this).parent().find('i').attr("class","emoticon emoticon-thumbsup");
            
        }
    });

    /*function auto_grow(element) {
        element.style.height = "5px";
        element.style.height = (element.scrollHeight)+"px";
    }*/

    /*$('div[id*="replies"] > div[id*="comments"]').each(function() {
        //var priorMargin = $(this).css('margin-left');
        $(this).next().css('margin-left', priorMargin + 100 + "px" + "!important");
    });*/
    
    //On submitting comment, change display to none, add profile image, wait to refresh page in 3 seconds
    $('#hcb_submit').click(function() {
        $('#comments_list').css('display', 'none');

        preval = $("#hcb_form_content").val();
        value = $('#hcb_form_pfp').val();

        nulvalue: if(value == ""){
            break nulvalue;
        }else{
            $('#hcb_form_content').val(preval + "[pfp-img]" + value + "[/pfp-img]");
            
        }

        setTimeout(function(){history.go(0);}, 3000);
    });

    $('#step1_agree').click(function() {
        alert($(this).attr('checked'));
    });

    //Count the number of comments and show the total.
    $(document).ready(function(){
        var count = $('#comments_list').find('div[id*="comment"]').length;
        $('#hcb_submit').before('<span id="cmt_count">' + count + ' Comments</span>');
    });

    //Show official emoticons
    $('#emote-sel-official').click(function(){
        if($('#emote-tab-official').css('display') == 'block'){return;}
        else{
            $('#emote-sel-official').css('color','orange');
            $('#emote-sel-community, #emote-sel-kaomoji').css('color',' #0088B5');
            $('#emote-tab-official').css('display','block');
            $('#emote-tab-community, #emote-tab-kaomoji').css('display','none');
        }
    });
    //Show community emoticons
    $('#emote-sel-community').click(function(){
        if($('#emote-tab-community').css('display') == 'block'){return;}
        else{
            $('#emote-sel-community').css('color','orange');
            $('#emote-sel-official, #emote-sel-kaomoji').css('color',' #0088B5');
            $('#emote-tab-community').css('display','block');
            $('#emote-tab-official, #emote-tab-kaomoji').css('display','none');
        }
    });
    //Show kaomojis emoticons
    $('#emote-sel-kaomoji').click(function(){
        if($('#emote-tab-kaomoji').css('display') == 'block'){return;}
        else{
            $('#emote-sel-kaomoji').css('color','orange');
            $('#emote-sel-official, #emote-sel-community').css('color',' #0088B5');
            $('#emote-tab-kaomoji').css('display','block');
            $('#emote-tab-official, #emote-tab-community').css('display','none');
        }
    });

    //Click emoticon, add text code into input field value, then copy input field
    $(document).ready(function(){
        $('.copy-emote').on("click", function(){
            value = $(this).closest(".copy-emote").text();
            
            $('#emote-input').val(function() {return this.value + value}).select();
            document.execCommand("copy");
        });
    });

    /*var textString, urlString;

    $('div[id*="comments"] blockquote p').each(
        function(){
            textString = $(this).text();
            urlString = textString.substring(textString.indexOf('[link]') + 6,textString.indexOf('[/link]'));

            $(this).remove(":contains('[link]')", ":contains('[/link]')");
            $(this).append('<a href="' + urlString + '" target = "_blank">' + urlString + '</a>')
            console.log(urlString);
        });

    /*This should not work, this should not work at all and yet it somehow does, despite not actually using [link][/link]
    I'm scared...*/

    

    //https://stackoverflow.com/questions/50037663/how-to-close-a-native-html-dialog-when-clicking-outside-with-javascript#57463812
    //Emoticon modal
    const openModal = document.getElementById('open-modal'); openModal.addEventListener('click', () => myDialog.showModal());
    const myDialog = document.getElementById('myDialog'); myDialog.addEventListener('click', () => myDialog.close());
    const myDiv = document.getElementById('myDiv'); myDiv.addEventListener('click', (event) => event.stopPropagation());

    //Help modal
    const openModalHelp = document.getElementById('open-modal-help'); openModalHelp.addEventListener('click', () => myDialogHelp.showModal());
    const myDialogHelp = document.getElementById('myDialog-help'); myDialogHelp.addEventListener('click', () => myDialogHelp.close());
    const myDivHelp = document.getElementById('myDiv-help'); myDivHelp.addEventListener('click', (event) => event.stopPropagation());

    var inputs=document.querySelectorAll('.inputfile');
    Array.prototype.forEach.call(inputs,function(input){var label=input.nextElementSibling;
    input.addEventListener('change',function(e){var fileName=e.target.value.split('\\').pop();
    if(fileName){label.innerHTML=fileName}})})

    var textString, urlString;

    $('div[id*="comments"] blockquote p:contains([link]):contains([/link])').each(
        function(){
            textString = $(this).text();
            urlString = textString.substring(textString.indexOf('[link]') + 6,textString.indexOf('[/link]'));
            
            newUrlString = urlString.replace(urlString, '<a href="' + urlString + '" target = "_blank">' + urlString + '</a>');
            //textString = textString.replace("[link]", "").replace("[/link]", "");
            //$(this).text(textString);
            $(this).html($(this).text().replace(urlString, newUrlString).replace("[link]", "").replace("[/link]", "").split("\n").join("<br />"));

            console.log(urlString);
        });

    var stringText, stringUrl

    $('div[id*="comments"] blockquote p:contains([pfp-img]):contains([/pfp-img])').each(
        function(){
            stringText = $(this).text(); //get the string text
            stringUrl = stringText.substring(stringText.indexOf('[pfp-img]') + 9,stringText.indexOf('[/pfp-img]'));

            console.log(stringUrl);
            //$('div[id*="comments"] blockquote > img').attr('src',stringUrl);
            if($(this).is('\
                :contains("i.imgur"),\
                :contains("images-wixmp"),\
                :contains("media.tumblr")\
            ')){
                $(this).parent().find('img').attr('src',"https://" + stringUrl);
            }else{
                $(this).parent().find('img').attr('src',stringUrl);
            }
            $(this).html($(this).text().replace(stringUrl, "").replace("[pfp-img]", "").replace("[/pfp-img]", "").split("\n").join("<br />"));

        });
    

    var str = document.getElementById("comments_list");
    var x = str.getElementsByTagName("p");
    for (var i = 0; i < x.length; i++) {
        var res = x[i].innerHTML
            .replace(/:thumbsup:/gi, '<i title=":thumbsup:" class="emoticon emoticon-thumbsup"></i>')
            .replace(/:screaming-cry:/gi, '<i title=":screaming-cry:" class="emoticon emoticon-screaming-cry"></i>')
            .replace(/:poggles:/gi, '<i title=":poggles:" class="emoticon emoticon-poggles"></i>')
            .replace(/:burning-rage:/gi, '<i title=":burning-rage:" class="emoticon emoticon-burning-rage"></i>')
            .replace(/:rip-fella:/gi, '<i title=":rip-fella:" class="emoticon emoticon-rip-fella"></i>')
            .replace(/:gaggle:/gi, '<i title=":gaggle:" class="emoticon emoticon-gaggle"></i>')
            .replace(/:missingno:/gi, '<i title=":missingno:" class="emoticon emoticon-missingno"></i>');
        x[i].innerHTML = res;
    }
    
    var preOnClick = $('#HCB_comment_box p .hcb-link').attr('onclick')
     $('#HCB_comment_box p .hcb-link').attr('onclick', preOnClick + 'setTimeout(() => {injectHcbChanges()}, "300");' )
    
    };

    