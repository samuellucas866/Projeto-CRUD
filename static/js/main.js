$(document).ready(function() {
    // Função para carregar profissionais via Ajax
    function loadProfissionais() {
        $.ajax({
            url: '/api/profissionais/',
            type: 'GET',
            success: function(response) {
                let profissionaisList = '';
                response.forEach(function(profissional) {
                    profissionaisList += `
                        <tr>
                            <td>${profissional.nome}</td>
                            <td>${profissional.especialidade}</td>
                            <td>${profissional.crm}</td>
                            <td>${profissional.email}</td>
                            <td>
                                <button class="btn btn-warning btn-edit" data-id="${profissional.id}">Editar</button>
                                <button class="btn btn-danger btn-delete" data-id="${profissional.id}">Excluir</button>
                            </td>
                        </tr>
                    `;
                });
                $('#profissionais-list tbody').html(profissionaisList);
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    }

    // Carregar profissionais ao carregar a página
    loadProfissionais();

    // Função para adicionar profissional via Ajax
    $('#add-profissional-form').submit(function(e) {
        e.preventDefault();
        const data = {
            nome: $('#nome').val(),
            especialidade: $('#especialidade').val(),
            crm: $('#crm').val(),
            email: $('#email').val()
        };
        $.ajax({
            url: '/api/profissionais/',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#add-profissional-form')[0].reset();
                loadProfissionais();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para deletar profissional via Ajax
    $('#profissionais-list').on('click', '.btn-delete', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/profissionais/${id}/`,
            type: 'DELETE',
            success: function(response) {
                loadProfissionais();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para editar profissional via Ajax
    $('#profissionais-list').on('click', '.btn-edit', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/profissionais/${id}/`,
            type: 'GET',
            success: function(response) {
                $('#edit-id').val(response.id);
                $('#edit-nome').val(response.nome);
                $('#edit-especialidade').val(response.especialidade);
                $('#edit-crm').val(response.crm);
                $('#edit-email').val(response.email);
                $('#edit-profissional-modal').modal('show');
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para atualizar profissional via Ajax
    $('#edit-profissional-form').submit(function(e) {
        e.preventDefault();
        const id = $('#edit-id').val();
        const data = {
            nome: $('#edit-nome').val(),
            especialidade: $('#edit-especialidade').val(),
            crm: $('#edit-crm').val(),
            email: $('#edit-email').val()
        };
        $.ajax({
            url: `/api/profissionais/${id}/`,
            type: 'PUT',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#edit-profissional-modal').modal('hide');
                loadProfissionais();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para carregar pacientes via Ajax
    function loadPacientes() {
        $.ajax({
            url: '/api/pacientes/',
            type: 'GET',
            success: function(response) {
                let pacientesList = '';
                response.forEach(function(paciente) {
                    pacientesList += `
                        <tr>
                            <td>${paciente.nome}</td>
                            <td>${paciente.data_nascimento}</td>
                            <td>${paciente.endereco}</td>
                            <td>${paciente.telefone}</td>
                            <td>
                                <button class="btn btn-warning btn-edit" data-id="${paciente.id}">Editar</button>
                                <button class="btn btn-danger btn-delete" data-id="${paciente.id}">Excluir</button>
                            </td>
                        </tr>
                    `;
                });
                $('#pacientes-list tbody').html(pacientesList);
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    }

    // Carregar pacientes ao carregar a página
    loadPacientes();

    // Função para adicionar paciente via Ajax
    $('#add-paciente-form').submit(function(e) {
        e.preventDefault();
        const data = {
            nome: $('#nome').val(),
            data_nascimento: $('#data_nascimento').val(),
            endereco: $('#endereco').val(),
            telefone: $('#telefone').val()
        };
        $.ajax({
            url: '/api/pacientes/',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#add-paciente-form')[0].reset();
                loadPacientes();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para deletar paciente via Ajax
    $('#pacientes-list').on('click', '.btn-delete', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/pacientes/${id}/`,
            type: 'DELETE',
            success: function(response) {
                loadPacientes();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para editar paciente via Ajax
    $('#pacientes-list').on('click', '.btn-edit', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/pacientes/${id}/`,
            type: 'GET',
            success: function(response) {
                $('#edit-id').val(response.id);
                $('#edit-nome').val(response.nome);
                $('#edit-data_nascimento').val(response.data_nascimento);
                $('#edit-endereco').val(response.endereco);
                $('#edit-telefone').val(response.telefone);
                $('#edit-paciente-modal').modal('show');
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para atualizar paciente via Ajax
    $('#edit-paciente-form').submit(function(e) {
        e.preventDefault();
        const id = $('#edit-id').val();
        const data = {
            nome: $('#edit-nome').val(),
            data_nascimento: $('#edit-data_nascimento').val(),
            endereco: $('#edit-endereco').val(),
            telefone: $('#edit-telefone').val()
        };
        $.ajax({
            url: `/api/pacientes/${id}/`,
            type: 'PUT',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#edit-paciente-modal').modal('hide');
                loadPacientes();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para carregar procedimentos via Ajax
    function loadProcedimentos() {
        $.ajax({
            url: '/api/procedimentos/',
            type: 'GET',
            success: function(response) {
                let procedimentosList = '';
                response.forEach(function(procedimento) {
                    procedimentosList += `
                        <tr>
                            <td>${procedimento.nome}</td>
                            <td>${procedimento.descricao}</td>
                            <td>
                                <button class="btn btn-warning btn-edit" data-id="${procedimento.id}">Editar</button>
                                <button class="btn btn-danger btn-delete" data-id="${procedimento.id}">Excluir</button>
                            </td>
                        </tr>
                    `;
                });
                $('#procedimentos-list tbody').html(procedimentosList);
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    }

    // Carregar procedimentos ao carregar a página
    loadProcedimentos();

    // Função para adicionar procedimento via Ajax
    $('#add-procedimento-form').submit(function(e) {
        e.preventDefault();
        const data = {
            nome: $('#nome').val(),
            descricao: $('#descricao').val()
        };
        $.ajax({
            url: '/api/procedimentos/',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#add-procedimento-form')[0].reset();
                loadProcedimentos();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para deletar procedimento via Ajax
    $('#procedimentos-list').on('click', '.btn-delete', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/procedimentos/${id}/`,
            type: 'DELETE',
            success: function(response) {
                loadProcedimentos();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para editar procedimento via Ajax
    $('#procedimentos-list').on('click', '.btn-edit', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/procedimentos/${id}/`,
            type: 'GET',
            success: function(response) {
                $('#edit-id').val(response.id);
                $('#edit-nome').val(response.nome);
                $('#edit-descricao').val(response.descricao);
                $('#edit-procedimento-modal').modal('show');
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para atualizar procedimento via Ajax
    $('#edit-procedimento-form').submit(function(e) {
        e.preventDefault();
        const id = $('#edit-id').val();
        const data = {
            nome: $('#edit-nome').val(),
            descricao: $('#edit-descricao').val()
        };
        $.ajax({
            url: `/api/procedimentos/${id}/`,
            type: 'PUT',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#edit-procedimento-modal').modal('hide');
                loadProcedimentos();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para carregar agendamentos via Ajax
    function loadAgendamentos() {
        $.ajax({
            url: '/api/agendamentos/',
            type: 'GET',
            success: function(response) {
                let agendamentosList = '';
                response.forEach(function(agendamento) {
                    agendamentosList += `
                        <tr>
                            <td>${agendamento.paciente}</td>
                            <td>${agendamento.profissional}</td>
                            <td>${agendamento.procedimento}</td>
                            <td>${agendamento.sala}</td>
                            <td>${agendamento.data}</td>
                            <td>
                                <button class="btn btn-warning btn-edit" data-id="${agendamento.id}">Editar</button>
                                <button class="btn btn-danger btn-delete" data-id="${agendamento.id}">Excluir</button>
                            </td>
                        </tr>
                    `;
                });
                $('#agendamentos-list tbody').html(agendamentosList);
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    }

    // Carregar agendamentos ao carregar a página
    loadAgendamentos();

    // Função para adicionar agendamento via Ajax
    $('#add-agendamento-form').submit(function(e) {
        e.preventDefault();
        const data = {
            paciente: $('#paciente').val(),
            profissional: $('#profissional').val(),
            procedimento: $('#procedimento').val(),
            sala: $('#sala').val(),
            data: $('#data').val()
        };
        $.ajax({
            url: '/api/agendamentos/',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#add-agendamento-form')[0].reset();
                loadAgendamentos();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para deletar agendamento via Ajax
    $('#agendamentos-list').on('click', '.btn-delete', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/agendamentos/${id}/`,
            type: 'DELETE',
            success: function(response) {
                loadAgendamentos();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para editar agendamento via Ajax
    $('#agendamentos-list').on('click', '.btn-edit', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/agendamentos/${id}/`,
            type: 'GET',
            success: function(response) {
                $('#edit-id').val(response.id);
                $('#edit-paciente').val(response.paciente);
                $('#edit-profissional').val(response.profissional);
                $('#edit-procedimento').val(response.procedimento);
                $('#edit-sala').val(response.sala);
                $('#edit-data').val(response.data);
                $('#edit-agendamento-modal').modal('show');
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para atualizar agendamento via Ajax
    $('#edit-agendamento-form').submit(function(e) {
        e.preventDefault();
        const id = $('#edit-id').val();
        const data = {
            paciente: $('#edit-paciente').val(),
            profissional: $('#edit-profissional').val(),
            procedimento: $('#edit-procedimento').val(),
            sala: $('#edit-sala').val(),
            data: $('#edit-data').val()
        };
        $.ajax({
            url: `/api/agendamentos/${id}/`,
            type: 'PUT',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#edit-agendamento-modal').modal('hide');
                loadAgendamentos();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para carregar salas via Ajax
    function loadSalas() {
        $.ajax({
            url: '/api/salas/',
            type: 'GET',
            success: function(response) {
                let salasList = '';
                response.forEach(function(sala) {
                    salasList += `
                        <tr>
                            <td>${sala.nome}</td>
                            <td>${sala.descricao}</td>
                            <td>
                                <button class="btn btn-warning btn-edit" data-id="${sala.id}">Editar</button>
                                <button class="btn btn-danger btn-delete" data-id="${sala.id}">Excluir</button>
                            </td>
                        </tr>
                    `;
                });
                $('#salas-list tbody').html(salasList);
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    }

    // Carregar salas ao carregar a página
    loadSalas();

    // Função para adicionar sala via Ajax
    $('#add-sala-form').submit(function(e) {
        e.preventDefault();
        const data = {
            nome: $('#nome').val(),
            descricao: $('#descricao').val()
        };
        $.ajax({
            url: '/api/salas/',
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#add-sala-form')[0].reset();
                loadSalas();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para deletar sala via Ajax
    $('#salas-list').on('click', '.btn-delete', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/salas/${id}/`,
            type: 'DELETE',
            success: function(response) {
                loadSalas();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para editar sala via Ajax
    $('#salas-list').on('click', '.btn-edit', function() {
        const id = $(this).data('id');
        $.ajax({
            url: `/api/salas/${id}/`,
            type: 'GET',
            success: function(response) {
                $('#edit-id').val(response.id);
                $('#edit-nome').val(response.nome);
                $('#edit-descricao').val(response.descricao);
                $('#edit-sala-modal').modal('show');
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });

    // Função para atualizar sala via Ajax
    $('#edit-sala-form').submit(function(e) {
        e.preventDefault();
        const id = $('#edit-id').val();
        const data = {
            nome: $('#edit-nome').val(),
            descricao: $('#edit-descricao').val()
        };
        $.ajax({
            url: `/api/salas/${id}/`,
            type: 'PUT',
            data: JSON.stringify(data),
            contentType: 'application/json',
            success: function(response) {
                $('#edit-sala-modal').modal('hide');
                loadSalas();
            },
            error: function(error) {
                console.log('Erro:', error);
            }
        });
    });
});
