package com.example.projetoBigCloud.models;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.NotFound;
import org.hibernate.annotations.NotFoundAction;

import java.util.List;
import java.util.UUID;

@Data
@Entity
public class Plano {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column
    private String nome;

    @Column
    private Double preco;

    @Column
    private Boolean ativo;

    @OneToMany
    @JoinColumn(name = "plano_id", referencedColumnName = "id")
    private List<Assinatura> assinaturas;

    public Plano() {
    }

    public Plano(String nome, Double preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
