$(function() {
    $('.ui.dropdown').dropdown();
    $('[title]').popup();
});


// Search
$(function() {
    $('.header-main .ui.search').search({
        type: 'category',
        minCharacters: 1,
        apiSettings: {
            onResponse: function(p_oResponse) {
                console.log('p_oResponse', p_oResponse);

                var response = {
                    results : {}
                };
                
                $.each(p_oResponse.items, function(index, item) {
                    var group = item.class || 'Unknown';

                    // var maxResults = 8;
                    
                    // if(index >= maxResults) {
                    //     return false;
                    // }
                    
                    // create new group category
                    if(response.results[group] === undefined) {
                        response.results[group] = {
                            name    : group,
                            results : []
                        };
                    }
                    
                    // add result to category
                    var row = {};
                    row.title = item.name;
                    if (item.description) {
                        row.description = item.description;
                    }
                    row.url = item.url;
                    
                    response.results[group].results.push(row);
                });
                return response;
            },
            url: 'http://localhost:3000/api/search?q={query}'
        }
        });
});


// List table
$(function() {
    $('.list-table').on('click', function(event) {
        let $el = $(event.target);
        
        if (!$el.is(':checkbox') 
            && $el.closest('tbody').length > 0 
            && $el.closest('.btn').length == 0) {
            let $cb = $el.closest('tr').find('input[type="checkbox"]');
            $cb.prop('checked', !$cb.is(':checked'));
        }
    });
});

function get_selected_id() {
    return Array.prototype.slice.call(document.querySelectorAll('.list-table tbody input[type="checkbox"]:checked'))
        .map(function(m) {return m.value;})
        .reduce(function(a, b) {return a + '-' + b;}, "")
        .replace(/^-/, '')
        .replace(/#/g, '');
}

function toggle_check() {
    let isChecked = $('.list-table thead input[type="checkbox"]').is(':checked');
    $('.list-table tbody input[type="checkbox"]').attr('checked', isChecked);
}