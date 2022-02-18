# jQuery-Tabledit v2.0.3

Inline editor for HTML tables compatible with Bootstrap.

## Features needed?

-   Other input fields

## TODO

-   Add some more info on example page
-   Add some more comments in new sections
-   Send back different error messages
-   Fix: add empty rows (no AJAX) when switching with add and edit button
-   Make it a real counter row that resets numbers when deletions happen
-   "data-info-table" in settings


(> = working on it / what's next)

## Examples

### HTML / Blade
                      <table *id="editable" ...>
                        ...
                        <tbody>
                            @foreach ($models as $model)
                            <tr  **data-id="{{ $invoice->id }}">
                                <td class="table-text">{{ $model->id }}</td>
                                <td class="table-text">{{ $model->barcode }}</td>
                                <td class="table-text">{{ $model->article }}</td>
                                <td class="table-text">{{ $model->qty }}</td>
                                ...
                             </tr>
                             @endforeach
#### * - your own id
#### ** - id must be here

### Javascript

                  document.addEventListener('DOMContentLoaded', function() {
                    $(document).ready(function() {

                        // for Laravel
                        $.ajaxSetup({
                            headers: {
                                'X-CSRF-Token': $("input[name=_token]").val()
                            }
                        });
                        // Table id *
                        $('#editable').Tabledit({
                            // editButton: false,
                            addButton: true,
                            url: '{{ route("model.action") }}',
                            dataType: "json",
                            columns: {
                                identifier: [0, 'id'],
                                editable: [
                                    [1, 'barcode'],
                                    [2, 'article'],
                                    [3, 'qty'],
                                ]
                            },
                            restoreButton: false,
                            onSuccess: function(data, textStatus, jqXHR) {
                                if (data.action == 'delete') {
                                    $('#' + data.id).remove();
                                }
                                console.log('onSuccess(data, textStatus, jqXHR)');
                                console.log('data:', data);
                                console.log(textStatus);
                                console.log(jqXHR);
                            },
                            buttons: {
                                edit: {
                                    class: 'btn btn-secondary',
                                    html: 'Edit record',
                                    action: 'edit'
                                },
                                delete: {
                                    class: 'btn btn-sm btn-secondary',
                                    html: 'Delete',
                                    action: 'delete'
                                },
                                save: {
                                    class: 'btn btn-secondary',
                                    html: 'Save'
                                },
                                restore: {
                                    class: 'btn btn-sm btn-warning',
                                    html: 'Restore',
                                    action: 'restore'
                                },
                                add: {
                                    class: 'btn btn-sm  btn-secondary',
                                    html: 'Add',
                                    action: 'add'
                                },
                                confirm: {
                                    class: 'btn btn-danger',
                                    html: 'Confirm'
                                }
                            }

                        });

                    });
                });
## Documentation

<http://markcell.github.io/jquery-tabledit/#documentation>

## Changelog

See CHANGELOG.md file.

## License

Code released under the MIT license.
