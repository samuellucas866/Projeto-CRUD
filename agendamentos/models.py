from django.db import models


class Agendamento(models.Model):
    paciente = models.ForeignKey(
        'pacientes.Paciente', on_delete=models.CASCADE)
    profissional = models.ForeignKey(
        'profissionais.Profissional', on_delete=models.CASCADE)
    procedimento = models.ForeignKey(
        'procedimentos.Procedimento', on_delete=models.CASCADE)
    sala = models.ForeignKey('salas.Sala', on_delete=models.CASCADE)
    data = models.DateTimeField()

    def __str__(self):
        return f'{self.paciente} - {self.profissional} - {self.data}'
