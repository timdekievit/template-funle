﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Persistence;

#nullable disable

namespace Persistence.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220913120554_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.8");

            modelBuilder.Entity("Domain.Candidate", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("TEXT");

                    b.Property<bool?>("AgreedTermsAndConditions")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("AgreedTermsAndConditionsDate")
                        .HasColumnType("TEXT");

                    b.Property<int?>("AssignmentSearchRadius")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("Availability")
                        .HasColumnType("TEXT");

                    b.Property<string>("City")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("DefaultMotivation")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<Guid>("DiscountGuid")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FileName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("Hours")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("KvkNummer")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Lastname")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Prefix")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("Rate")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Role")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<bool?>("Searching")
                        .HasColumnType("INTEGER");

                    b.Property<bool?>("Whatsapp")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Candidates");
                });
#pragma warning restore 612, 618
        }
    }
}
