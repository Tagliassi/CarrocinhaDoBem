using webApi.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CarrocinhaDoBem.Api.Context.Mappings;

public class UserMap : IEntityTypeConfiguration<User>
{
    public void Configure(EntityTypeBuilder<User> builder)
    {
        builder.ToTable("User");

        builder.HasKey(x => x.Id)
            .HasName("userID");

        builder.Property(u => u.UserName)
            .HasColumnName("userName")
            .HasColumnType("varchar(100)")
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(u => u.Email)
            .HasColumnName("email")
            .HasColumnType("varchar(100)")
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(u => u.PasswordHash)
            .HasColumnName("password")
            .HasColumnType("varchar(100)")
            .HasMaxLength(100)
            .IsRequired();

        builder.Property(u => u.Phone)
          .HasColumnName("phone")
          .HasColumnType("varchar(100)")
          .HasMaxLength(14);

        builder.Property(u => u.Address)
            .HasColumnName("address")
            .HasColumnType("varchar(100)")
            .HasMaxLength(100);

        builder.Property(u => u.UserType)
          .HasColumnName("userType")
          .HasColumnType("varchar(20)")
          .HasMaxLength(20);

        builder.Property(u => u.Avatar)
            .HasColumnType("LONGBLOB")
            .HasColumnName("avatar");

        builder.Property(u => u.BirthDate)
          .HasColumnName("birthDate")
          .HasColumnType("DATE");
    }
}
